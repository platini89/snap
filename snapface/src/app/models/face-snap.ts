// creation d'une classe pour les facesnaps
// cette classe sera utilisee pour creer les facesnaps

export class FaceSnap {

// propriete pour la location
  location?: string;



  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}


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
}