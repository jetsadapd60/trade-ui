import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class StorageService {

    /**
     * ดึง access token จาก localstorage
     * @param key ชื่อโทเค็น
     * @returns 
     */
    getStorage(key: string): string | undefined {
        let existToken = localStorage.getItem(key);
        if(existToken) {
            return existToken;
        } else {
            return undefined;
        }
    }

    /**
     * บันทึก access token ลง localstorage
     * @param key ชื่อโทเค็น
     * @param accessToken โทคเค็น
     * @returns บันทีกสำเร็จคืนค่า 1, ไม่สำเร็จคืนค่า 0
     */
    setStorage(key: string, accessToken: string): number {
        if(key && accessToken) {
            localStorage.setItem(key, accessToken);
            return 1;
        } else {
            return 0;
        }
    }

    clearStorage() {
        localStorage.clear();
        return 1;
    }

    removeStorage(key: string) {
        localStorage.removeItem(key);
        return 1;
    }
}