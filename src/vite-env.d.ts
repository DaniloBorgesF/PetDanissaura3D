/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGE_BASE_URL: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_ATELIE_NAME: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_ENABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
