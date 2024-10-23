/// <reference types="vite/client" />

interface envInterface {
    readonly VITE_URL_BACK: string;
    
  }
  interface ImportMeta {
    readonly env: envInterface;
  }