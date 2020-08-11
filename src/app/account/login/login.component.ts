import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    senha: ''
  };

  constructor(
    private accountServices: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountServices.login(this.login);
      console.log(`Login efetuado: ${result}`)

      //navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
