import { Injectable } from "@angular/core";
import { Socket, io } from "socket.io-client";
import { StorageService } from "./storage.service";
import { StorageKey } from "../shared/enums/token.enum";
import { environment } from "src/environments/environment";

@Injectable()
export class SocketIoService {

    private readonly SOCKET_URL: string = environment.url_feeds;

    private _socket: Socket;

    constructor(private storageService: StorageService) {
        this._socket = io('https://socketa1.ausirisnext.com/trader-socket', {
            extraHeaders: {
              traderid:this.storageService.getStorage(StorageKey.USER_ID) ?? '',
              token:this.storageService.getStorage(StorageKey.ACCESS_TOKEN) ?? ''
            }
          })
    }

    get socket(): Socket {
        return this._socket;
    }

    disConnectSocket() {
      this.socket.on("disconnect", (reason) => {
        // console.log(reason); prints "io client disconnect"
      });
    }

}