import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-control',
  templateUrl: './url-control.component.html',
  styleUrls: ['./url-control.component.scss']
})
export class UrlControlComponent implements OnInit {

  urlInput = '';

  constructor(
    private urlService: UrlService,
  ) { }

  ngOnInit(): void {
  }

  clickSet(): void {
    // tslint:disable-next-line:prefer-const
    let params = new FormData();
    params.append('url', this.urlInput);
    this.urlService.setUrl(params).subscribe(result => {
      if (result.success) {
        alert('done!');
        window.location.href = this.urlInput;
      } else {
        alert(result.error);
      }
    }, err => {
      alert(err);
    });

  }

}
