import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private accountServices: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.accountServices.login('');
    this.router.navigate(['login'])
  }

}
