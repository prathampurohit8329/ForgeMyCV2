'use client';

import React, { createContext, useReducer, useContext, useEffect, type Dispatch } from 'react';
import type { ResumeData, Template } from '@/types/resume';
import { initialData } from '@/lib/initial-data';

type ResumeState = {
  data: ResumeData;
  template: Template;
};

type Action =
  | { type: 'SET_STATE'; payload: ResumeState }
  | { type: 'UPDATE_FIELD'; payload: { section: keyof ResumeData; data: any } }
  | { type: 'UPDATE_PERSONAL_INFO'; payload: { field: string; value: string } }
  | { type: 'SET_TEMPLATE'; payload: Template };

const initialState: ResumeState = {
  data: initialData,
  template: 'minimalist',
};

function resumeReducer(state: ResumeState, action: Action): ResumeState {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload;
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        data: {
          ...state.data,
          personalInfo: {
            ...state.data.personalInfo,
            [action.payload.field]: action.payload.value,
          },
        },
      };
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.section]: action.payload.data,
        },
      };
    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };
    default:
      return state;
  }
}

const ResumeContext = createContext<{
  state: ResumeState;
  dispatch: Dispatch<Action>;
} | null>(null);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem('forgeMyCvState');
      if (savedState) {
        let parsedState = JSON.parse(savedState);
        // Ensure a valid template is loaded, defaulting to minimalist
        const validTemplates = ['classic', 'modern', 'creative', 'professional', 'executive', 'minimalist'];
        if (!validTemplates.includes(parsedState.template)) {
          parsedState.template = 'minimalist';
        }
        dispatch({ type: 'SET_STATE', payload: parsedState });
      }
    } catch (error) {
      console.error('Failed to load state from localStorage', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('forgeMyCvState', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state to localStorage', error);
    }
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
