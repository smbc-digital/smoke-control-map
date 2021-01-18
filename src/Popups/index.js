 const smokecontrolareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tag" aria-hidden="true"></i><p class="title">Smoke Control Area</p>
  <p></p>
  <p class="info">Restrictions: ${feature.properties.restrictions}</p>
  <p class="info">Source: ${feature.properties.source}</p>
  <p class="info">Derived: ${feature.properties.derived}</p>

  </div>`
 
  layer.bindPopup(content)
 }

export {
  smokecontrolareaPopup
}