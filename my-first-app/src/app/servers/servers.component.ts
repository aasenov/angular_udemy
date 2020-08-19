import {Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-servers',
  templateUrl : './servers.component.html'
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='Server was created';
    this.servers.push(this.serverName);
  }
}
