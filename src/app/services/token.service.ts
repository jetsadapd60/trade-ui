import { Injectable } from "@angular/core";
import { StorageKey } from "../shared/enums/token.enum";

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
    getAccessToken(): string | undefined {
        let existToken = localStorage.getItem(StorageKey.ACCESS_TOKEN);
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
    setAccessToken(accessToken: string): number {
        if(accessToken) {
            localStorage.setItem(StorageKey.ACCESS_TOKEN, accessToken);
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
    getRefreshToken(): string | undefined {
        let existRefreshToken = localStorage.getItem(StorageKey.REFRESH_TOKEN);
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
    setRreshToken(refreshToken: string) {
        if(refreshToken) {
            localStorage.setItem(StorageKey.REFRESH_TOKEN,refreshToken);
            return 1;
        } else {
            return 0;
        }
    }
}