import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsServices {


  constructor(private http: HttpClient) {}

  private faceSnaps: FaceSnap[] =[ ];
//  this.faceSnaps[1].setLocation('à la montagne');

// methode pour snap un facesnap par son id
getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
  return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
}


snapFaceSnapById(faceSnapId: string, snapType: SnapType): Observable<FaceSnap> {
  return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap)
      )
  );
}

//  methode pour retouner ,afficher les face snaps
getAllFaceSnaps(): Observable<FaceSnap[]> {
  return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
}





addFaceSnaps(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
  return this.getAllFaceSnaps().pipe(
       map(facesnaps => [...facesnaps].sort((a,b) => {
         const idA = typeof a.id === 'number' ? a.id : Number(a.id);
         const idB = typeof b.id === 'number' ? b.id : Number(b.id);
         return idA - idB;
       })),
       map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
       map(previousFacesnap => {
         const previousId = typeof previousFacesnap.id === 'number' ? previousFacesnap.id : Number(previousFacesnap.id);
         return {
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: previousId + 1
        };
      }),
      switchMap(newFacesnap => this.http.post<FaceSnap>(
          'http://localhost:3000/facesnaps',
          newFacesnap)
      )
  );
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
