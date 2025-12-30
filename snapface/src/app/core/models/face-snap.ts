import { SnapType } from "./snap-type.type";

// creantion d'une classe pour les facesnaps
// cette classe sera utilisee pour creer les facesnaps

export class FaceSnap {

// propriete pour la location
  location?: string;

  id: number | string;



  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdDate: Date,
              public snaps: number) {

      // genere un id unique 
       this.id = crypto.randomUUID().substring(0, 8);          
              }


// methode pour incrementer le nombre de snaps

              addSnap(): void {
                this.snaps++;
              }
 // methode pour decrementer le nombre de snaps           
              removeSnap(): void {
                this.snaps--;
              }    
              
              
              // methode pour ajouter la location
              setLocation(location: string): void {
                this.location = location;
              }

              // acces a la localisation
              withLocation(location: string): FaceSnap {
                this.setLocation(location);
                return this;
              }



//cette methode snap ou unsnap un facesnap
              snap(snapType: SnapType) {
                if (snapType === 'snap') {
                  this.addSnap();
                } else if (snapType === 'unsnap') {
                  this.removeSnap();
                }
            }
}