import { WebPlugin } from '@capacitor/core';
import { ZebraPlugin, DiscoveryResult, PrinterStatus } from '.';

//This is just stubbed in here for now, but as crazy as it sounds web implementation may be possible
//https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web
export class ZebraPluginWeb extends WebPlugin implements ZebraPlugin {
  constructor() {
    super({
      name: 'ZebraPrinter',
      platforms: ['web']
    });
  }
  echo(options: {value:string}):Promise<any>{
    console.log("ZebraPluginWeb::echo", options.value);
    return Promise.reject("Feature not Implemented");
  }
  test(): Promise<any>{
    console.log("ZebraPluginWeb::test",);
    return Promise.reject("Feature not Implemented");
  }
  print(options: { cpcl: string }): Promise<any> {
    console.log("ZebraPluginWeb::print", options.cpcl);
    return Promise.reject("Feature not Implemented");
  }
  isConnected(): Promise<boolean> {
    console.log("ZebraPluginWeb::isConnected");
    return Promise.reject("Feature not Implemented");
  }
  printerStatus(options: { MACAddress: string }): Promise<PrinterStatus>{
    console.log("ZebraPluginWeb::printerStatus", options.MACAddress);
    return Promise.reject("Feature not Implemented");
  }
  connect(options: { MACAddress: string }): Promise<any> {
    console.log("ZebraPluginWeb::connect", options.MACAddress);
    return Promise.reject("Feature not Implemented");
  }
  disconnect(): Promise<boolean> {
    console.log("ZebraPluginWeb::disconnect");
    return Promise.reject("Feature not Implemented");
  }
  discover(): Promise<DiscoveryResult> {
    console.log("ZebraPluginWeb::discover");
    return Promise.reject("Feature not Implemented");
  }
}

const ZebraPrinter  = new ZebraPluginWeb();
export { ZebraPrinter };
