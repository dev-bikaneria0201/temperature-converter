document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
  
    // Convert Celsius to Fahrenheit
    if (celsiusInput !== "") {
      var celsius = parseFloat(celsiusInput);
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheitInput").value = fahrenheit.toFixed(2);
      document.getElementById("result").innerText = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    }
  
    // Convert Fahrenheit to Celsius
    if (fahrenheitInput !== "") {
      var fahrenheit = parseFloat(fahrenheitInput);
      var celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("celsiusInput").value = celsius.toFixed(2);
      document.getElementById("result").innerText = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    }
  });
  