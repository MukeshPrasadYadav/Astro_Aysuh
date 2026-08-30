declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackMetaEvent = (
  event: string,
  data?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
};