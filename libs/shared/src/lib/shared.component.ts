import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { inject, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [CommonModule, AXButtonModule, AXDialogModule, AXDecoratorModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
})
export class SharedComponent {
  private dialogService: AXDialogService = inject(AXDialogService);

  _handleAsyncClick() {
    const subject = new Subject();
    subject.subscribe((status) => {
      console.log(`The process has been "${status}".`);
    });
    const dialog = this.dialogService.open({
      content: 'Are you sure you want to permanently delete the file?',
      title: 'Delete File',
      type: 'primary',
      orientation: 'horizontal',
      buttons: [
        {
          text: 'Delete',
          color: 'danger',
          onClick: (e: any) => {
            e.handled = true;
            e.source.text = 'Deleting...';
            e.source.disabled = true;
            e.source.loading = true;
            subject.next('Started');
            subject.next('Deleting...');
            setTimeout(() => {
              if (!subject.closed) {
                subject.next('Completed');
                subject.complete();
                dialog.close();
              }
            }, 3000);
          },
        },
        {
          text: 'Cancel',
          color: 'ghost',
          autofocus: true,
          onClick: (e) => {
            if (!subject.closed) {
              subject.next('Canceled');
              dialog.close();
            }
          },
        },
      ],
      closeButton: false,
    });
  }
}
