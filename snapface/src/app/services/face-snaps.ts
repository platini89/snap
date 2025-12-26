import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsServices {

  private faceSnaps: FaceSnap[] =
  [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6
    ).withLocation('à la montagne'),

    new FaceSnap(
      'Un bon repas',
      'Mmmh que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156
    )
  ];
//  this.faceSnaps[1].setLocation('à la montagne');

// methode pour snap un facesnap par son id
getFaceSnapById(faceSnapId: string): FaceSnap {
  const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!foundFaceSnap) {
    throw new Error('FaceSnap not found!');
  }
  return foundFaceSnap;
}

snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  faceSnap.snap(snapType);
}

//  methode pour retouner ,afficher les face snaps
getFaceSnaps(): FaceSnap[] {
  return [...this.faceSnaps];
}






addFaceSnap(formValue: {
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
}): void {

  const newFaceSnap = new FaceSnap(
    formValue.title,
    formValue.description,
    formValue.imageUrl,
    new Date(),
    0
  );

  if (formValue.location) {
    newFaceSnap.setLocation(formValue.location);
  }

  this.faceSnaps.push(newFaceSnap);
}




}
