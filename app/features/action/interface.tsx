export interface FormEmail {
  success: boolean;
  message: string;
  data: FormEmailData | null;
}

export interface FormEmailData {
  email: string;
}
