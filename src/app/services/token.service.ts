import { Injectable } from "@angular/core";

/**
 * Service นี้สำหรับจัดการ Token
 */

@Injectable({providedIn: 'root'})
export class TokenServiec {

    /**
     * ดึง access token จาก localstorage
     * @param key ชื่อโทเค็น
     * @returns 
     */
    getAccessToken(key: string): string | undefined {
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
    setAccessToken(key: string, accessToken: string): number {
        if(key && accessToken) {
            localStorage.setItem(key, accessToken);
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * ดึง refresh token จาก localstorage
     * @param key ชื่อรีเฟรชโทเค็น
     * @returns มีเฟรชโทเค็นคืนค่า refresh token, ไม่มีเฟรชโทเค็นคืนค่า undefinded
     */
    getRefreshToken(key: string): string | undefined {
        let existRefreshToken = localStorage.getItem(key);
        if(existRefreshToken) {
            return existRefreshToken;
        } else {
            return undefined;
        }
    }

        /**
     * บันทึก refresh token ลง localstorage
     * @param key ชื่อรีเฟรชโทเค็น
     * @param accessToken โทคเค็น
     * @returns บันทีกสำเร็จคืนค่า 1, ไม่สำเร็จคืนค่า 0
     */
    setRreshToken(key: string, refreshToken: string) {
        if(key && refreshToken) {
            localStorage.setItem(key, refreshToken);
            return 1;
        } else {
            return 0;
        }
    }
}