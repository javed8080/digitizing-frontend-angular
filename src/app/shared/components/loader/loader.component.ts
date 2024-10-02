import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public show: boolean = true;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    setTimeout(() => {
      this.show = false;
    }, 10);
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState$.subscribe((state) => {
      console.log(state , 'state');
      this.show = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
