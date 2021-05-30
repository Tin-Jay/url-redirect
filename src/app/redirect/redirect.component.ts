import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
    private urlService: UrlService,
  ) { }
  directUrl = '';
  urlBtoa = '';
  msg = '轉址中....';
  ngOnInit(): void {
    this.getUrl();
    // window.location.href = ''; // 轉頁
    // window.open('');           // 開新頁轉業
  }

  getUrl(): void {
    const params = new FormData();
    this.urlService.getUrl(params).subscribe(result => {
      if (!result.errpr) {
        this.directUrl = result.url;
        if (this.directUrl !== '') {
          window.location.href = this.directUrl;
        }
        else {
          this.msg = 'Err 404!';
        }
      } else {
        this.msg = 'Err 404!';
      }
    }, err => {
      alert(err);
    });
  }

}
