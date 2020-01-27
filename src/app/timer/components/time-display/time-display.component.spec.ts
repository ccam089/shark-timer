import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material/material.module';
import { TimeDisplayComponent } from './time-display.component';

describe('TimeDisplayComponent', () => {
    let component: TimeDisplayComponent;
    let fixture: ComponentFixture<TimeDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimeDisplayComponent],
            imports: [MaterialModule, FormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display an alert', () => {
        spyOn(window, 'alert');
        component.inputHours = 0;
        component.inputMinutes = 0;
        component.inputSeconds = 0;
        component.startSetTime();
        console.log("component.inputHours", component.inputHours)
        expect(window.alert).toHaveBeenCalledWith('buttons should be all disabled');
    });
});
