declare module "js-cookie" {
    interface Cookies {
        get(key: string): string | undefined;
        set(key: string, value: string, options?: { expires?: number | Date; path?: string; secure?: boolean; }): void;
        remove(key: string, options?: { path?: string; domain?: string; secure?: boolean; }): void;
    }

    const Cookies: Cookies;
    export = Cookies;
}
