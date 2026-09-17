const results = [];
for (let i = 100; i < 999; i++) {
  const flightId = `AA-${i}`;
  let chaoticHash = 0;
  for(let j=0; j<flightId.length; j++) chaoticHash = Math.imul(31, chaoticHash) + flightId.charCodeAt(j) | 0;
  const hash = Math.abs(chaoticHash) % 100;
  if (hash > 85) {
    const dist = 1450;
    const weatherMultiplier = 1.0;
    const baseDelayMin = 5 * weatherMultiplier;
    const operationalDelay = hash * 1.2;
    const predictedDelayMinutes = Math.min(180, Math.max(0, Math.round(baseDelayMin + operationalDelay + (Math.sin(dist) * 5))));
    const delayProbability = Math.min(99, Math.round((predictedDelayMinutes / 120) * 80 + (weatherMultiplier > 1.5 ? 40 : 10) + (hash % 10)));
    results.push({ flightId, hash, riskLevel: 'HIGH', prob: delayProbability, delay: predictedDelayMinutes });
    if (results.length >= 3) break;
  }
}
console.table(results);
