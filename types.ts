export type Remplacement = {
  id: string;
  nomEquipier: string;
  dateDemande: Date;
  recuPar: string;
  dateQuart: Date;
  posteQuart: string;
  heuresQuart: string;
  raison: string | null;
  courrielEnvoye: string;
  statut: string;
  nomEquipierRemplacant: string;
  remplacementEffectuePar: string;
};
