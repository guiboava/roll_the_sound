import { SafeResourceUrl } from "@angular/platform-browser";

export type Artist = {
    id?: number,
    name: string,
    image: string | null,
    band: string,
    srcClip: string,
    about: string,
}
