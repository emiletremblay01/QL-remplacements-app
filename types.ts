export type Remplacement = {
  id: string;
  nomEquipier: string;
  dateDemande: Date;
  recuPar: string;
  dateQuart: Date;
  posteQuart: string;
  heuresQuart: string;
  raison?: string;
  courrielEnvoye: "oui" | "non";
  statut: "en attente" | "accepté" | "refusé";
  nomEquipierRemplacant: string;
  remplacementEffectuePar: string;
};
