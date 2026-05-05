import * as turf from "@turf/turf";

export const calculateArea = (latlngs) => {
  const coords = latlngs.map(p => [p.lng, p.lat]);
  coords.push(coords[0]);

  const polygon = turf.polygon([coords]);
  const area = turf.area(polygon);

  return (area / 4046).toFixed(2); // acre
};