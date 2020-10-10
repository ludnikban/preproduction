import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    users = [];
    url = 'https://api.github.com/users'

    ngOnInit() {
        this.http.get(this.url).subscribe(res => {
            for (let key in res)
                if (res.hasOwnProperty(key))
                    this.users.push(res[key]);
        });
    }
}

