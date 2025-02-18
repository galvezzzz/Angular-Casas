import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    edad: new FormControl(''),
    email: new FormControl('')
  });

  aceptar() {
    this.housingService.aceptar(
      this.applyForm.value.nombre ?? '',
      this.applyForm.value.apellidos ?? '',
      this.applyForm.value.edad ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
