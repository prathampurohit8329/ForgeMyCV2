'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useResume } from '@/contexts/resume-context';
import type { ChangeEvent } from 'react';
import { Button } from './ui/button';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ResumeForm() {
  const { state, dispatch } = useResume();
  const { data } = state;

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({
          type: 'UPDATE_PERSONAL_INFO',
          payload: { field: 'photoUrl', value: reader.result as string },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (section: keyof typeof data, value: any) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { section, data: value } });
  };
  
  const handleItemChange = (section: 'experience' | 'education', index: number, field: string, value: string) => {
    const items = [...data[section]];
    items[index] = { ...items[index], [field]: value };
    handleFieldChange(section, items);
  };
  
  const addItem = (section: 'experience' | 'education') => {
    const newItem = section === 'experience'
      ? { id: `exp${Date.now()}`, company: '', role: '', startDate: '', endDate: '', description: '' }
      : { id: `edu${Date.now()}`, institution: '', degree: '', startDate: '', endDate: '', description: '' };
    handleFieldChange(section, [...data[section], newItem]);
  };
  
  const removeItem = (section: 'experience' | 'education', index: number) => {
    const items = data[section].filter((_, i) => i !== index);
    handleFieldChange(section, items);
  };

  return (
    <Card>
       <CardHeader>
        <CardTitle>Resume Content</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['personal', 'summary']} className="w-full">
          <AccordionItem value="personal">
            <AccordionTrigger className="text-lg font-semibold">Personal Details</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={data.personalInfo.name} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={data.personalInfo.email} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={data.personalInfo.phone} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={data.personalInfo.address} onChange={handlePersonalInfoChange} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" name="linkedin" value={data.personalInfo.linkedin} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" value={data.personalInfo.website} onChange={handlePersonalInfoChange} />
                </div>
                 <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="photoUrl">Profile Photo</Label>
                  <Input id="photoUrl" name="photoUrl" type="file" accept="image/*" onChange={handlePhotoUpload} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="summary">
            <AccordionTrigger className="text-lg font-semibold">Professional Summary</AccordionTrigger>
            <AccordionContent className="pt-4">
              <Textarea
                value={data.summary}
                onChange={(e) => handleFieldChange('summary', e.target.value)}
                rows={5}
                placeholder="A brief summary about your professional background..."
              />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="experience">
            <AccordionTrigger className="text-lg font-semibold">Work Experience</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              {data.experience.map((item, index) => (
                <Card key={item.id} className="relative p-4 bg-muted/50">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2"><Label>Company</Label><Input value={item.company} onChange={(e) => handleItemChange('experience', index, 'company', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Role</Label><Input value={item.role} onChange={(e) => handleItemChange('experience', index, 'role', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Start Date</Label><Input type="month" value={item.startDate} onChange={(e) => handleItemChange('experience', index, 'startDate', e.target.value)} /></div>
                    <div className="space-y-2"><Label>End Date</Label><Input type="month" value={item.endDate} onChange={(e) => handleItemChange('experience', index, 'endDate', e.target.value)} /></div>
                  </div>
                  <div className="mt-4 space-y-2"><Label>Description</Label><Textarea value={item.description} onChange={(e) => handleItemChange('experience', index, 'description', e.target.value)} rows={4} placeholder="e.g.- Achieved X by doing Y"/></div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-muted-foreground hover:text-destructive" onClick={() => removeItem('experience', index)}><Trash2 className="h-4 w-4" /></Button>
                </Card>
              ))}
              <Button variant="outline" onClick={() => addItem('experience')}><PlusCircle className="mr-2 h-4 w-4" /> Add Experience</Button>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="education">
            <AccordionTrigger className="text-lg font-semibold">Education</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
               {data.education.map((item, index) => (
                <Card key={item.id} className="relative p-4 bg-muted/50">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2"><Label>Institution</Label><Input value={item.institution} onChange={(e) => handleItemChange('education', index, 'institution', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Degree</Label><Input value={item.degree} onChange={(e) => handleItemChange('education', index, 'degree', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Start Date</Label><Input type="month" value={item.startDate} onChange={(e) => handleItemChange('education', index, 'startDate', e.target.value)} /></div>
                    <div className="space-y-2"><Label>End Date</Label><Input type="month" value={item.endDate} onChange={(e) => handleItemChange('education', index, 'endDate', e.target.value)} /></div>
                  </div>
                   <div className="mt-4 space-y-2"><Label>Description</Label><Textarea value={item.description} onChange={(e) => handleItemChange('education', index, 'description', e.target.value)} rows={2} placeholder="e.g.- Relevant coursework"/></div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-muted-foreground hover:text-destructive" onClick={() => removeItem('education', index)}><Trash2 className="h-4 w-4" /></Button>
                </Card>
              ))}
              <Button variant="outline" onClick={() => addItem('education')}><PlusCircle className="mr-2 h-4 w-4" /> Add Education</Button>
            </AccordionContent>
          </AccordionItem>
          
           <AccordionItem value="skills">
            <AccordionTrigger className="text-lg font-semibold">Skills</AccordionTrigger>
            <AccordionContent className="pt-4">
              <Label>Skills (comma separated)</Label>
              <Textarea
                value={data.skills.join(', ')}
                onChange={(e) => handleFieldChange('skills', e.target.value.split(',').map(s => s.trim()))}
                rows={3}
                placeholder="e.g. React, TypeScript, Leadership"
              />
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
}
