// Calculadora de Huella de Carbono
document.getElementById('huellaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const electricidad = parseFloat(document.getElementById('consumo-electrico').value) || 0;
    const km = parseFloat(document.getElementById('transporte').value) || 0;
    const factorTransporte = parseFloat(document.getElementById('tipo-transporte').value);

    // Cálculos aproximados
    const co2Electricidad = electricidad * 0.4; // 0.4 kg CO2 por kWh (promedio España)
    const co2Transporte = km * factorTransporte;
    const totalCO2 = co2Electricidad + co2Transporte;

    // Mostrar resultados
    document.getElementById('huella-resultado').textContent =
        `${totalCO2.toFixed(2)} kg CO₂/mes`;

    document.getElementById('huella-equivalente').textContent =
        `Equivale a ${Math.ceil(totalCO2/21)} árboles necesarios para absorber tus emisiones anuales`;

    // Generar recomendaciones
    const recomendaciones = document.getElementById('recomendaciones');
    recomendaciones.innerHTML = '<h3>Recomendaciones para reducir tu huella:</h3><ul>';

    if(co2Electricidad > 100) {
        recomendaciones.innerHTML += '<li>Considera instalar paneles solares o cambiar a una comercializadora de energía renovable</li>';
    }

    if(co2Transporte > 50) {
        recomendaciones.innerHTML += '<li>Usa más transporte público, bicicleta o comparte coche</li>';
    }

    if(totalCO2 > 200) {
        recomendaciones.innerHTML += '<li>Revisa el aislamiento de tu vivienda para reducir el consumo de calefacción/refrigeración</li>';
    }

    recomendaciones.innerHTML += `
        <li>Reduce el consumo de electricidad con electrodomésticos eficientes</li>
        <li>Desconecta los dispositivos que no estés usando (no los dejes en standby)</li>
    </ul>`;
});