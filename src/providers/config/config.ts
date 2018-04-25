import { Injectable } from '@angular/core';

let config_Key_name = "config";

@Injectable()
export class ConfigProvider {

  private config ={
      showSlide: false,
      name: "",
      username: "",
  }
  constructor() {

  }
  //Recupera
  public getConfig():any{
    return localStorage.getItem(config_Key_name);
  }
  //Carrega
  public setConfig(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: "",
  };

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(username){
      config.username = username;
    }
    localStorage.setItem(config_Key_name, JSON.stringify(config));
  }
}
