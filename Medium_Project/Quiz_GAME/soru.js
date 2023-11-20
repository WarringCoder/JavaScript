function soru(soruMetni, seçenekler, dogruCevap)
{
    this.soruMetni = soruMetni,
    this.seçenekler = seçenekler,
    this.dogruCevap = dogruCevap;
}

soru.prototype.dogruCevabiKontrolEt = function(cevap)
{
    return  cevap === this.dogruCevap;
}

