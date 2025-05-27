export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  message: string;
}

export const INITIAL_FORM_STATE: ApplicationFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  message: '',
};
