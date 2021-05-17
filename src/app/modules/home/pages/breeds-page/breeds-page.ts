import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreed, IImage, IParameters } from 'src/app/interfaces';
import { BreedService } from 'src/app/services/breed.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
	selector: 'breeds-page',
	templateUrl: 'breeds-page.html',
	styleUrls: ['breeds-page.scss']
})

export class BreedsPage {

	breed: IBreed;
	mainImg: IImage;
	otherImg: IImage[] = [];

	constructor(
		private _breedSrv: BreedService,
		private _imgSrv: ImageService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		let breedName = this._activatedRoute.snapshot.params.name;

		this.getBreed(breedName);
	}

	private getBreed(breedName: string) {
		this._breedSrv.searchByParam({ q: breedName })
			.subscribe(breed => {

				if (!breed || !breed.length) {
					this._router.navigate([''])
					return;
				};

				this.breed = breed[0];

				this._getMainImage(this.breed.reference_image_id);
				this._getImages(this.breed.id);
			});
	}

	private _getMainImage(referenceImageId: string) {
		this._imgSrv.getOne({}, referenceImageId)
			.subscribe(img => {
				if (!img) return;
				this.mainImg = img;
			});
	}


	private _getImages(breedName: string) {
		let count = 0;

		let params: IParameters = {
			breed_ids: breedName
		};

		while (count < 8) {

			this._imgSrv.searchOneByParam(params)
				.subscribe(img => {
					this.otherImg.push(img[0]);
				});

			count++;
		}
	}

}
