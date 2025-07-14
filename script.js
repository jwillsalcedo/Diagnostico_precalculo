document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE PREGUNTAS COMPLETO (100 PREGUNTAS) ---
    const allQuestions = [
      {
        "Pregunta": "El número cero es considerado un número natural.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "Todo número entero es también un número racional.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "¿Cuál es el resultado de '5 elevado a la potencia de 3'?",
        "Respuestas": ["15", "25", "125", "53"],
        "Res_Correcta": "125",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "La expresión 'la raíz cuadrada de 64' es igual a...",
        "Respuestas": [],
        "Res_Correcta": "8",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "Al resolver la ecuación '2x más 5 es igual a 15', el valor de x es...",
        "Respuestas": ["10", "5", "7.5", "20"],
        "Res_Correcta": "5",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "La solución de la desigualdad '3x es mayor que 9' es...",
        "Respuestas": ["x es mayor que 3", "x es menor que 3", "x es igual a 3", "x es mayor que 27"],
        "Res_Correcta": "x es mayor que 3",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "El producto notable '(a más b) al cuadrado' es igual a 'a al cuadrado más 2ab más b al cuadrado'.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "Al factorizar la expresión 'x al cuadrado menos 9', se obtiene (x-3) por (x+3).",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "Simplifica la expresión racional '(x al cuadrado menos 1) dividido por (x menos 1)'. El resultado es...",
        "Respuestas": [],
        "Res_Correcta": "x más 1",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "El punto donde una gráfica cruza el eje Y se llama...",
        "Respuestas": ["Origen", "Intercepto en X", "Intercepto en Y", "Vértice"],
        "Res_Correcta": "Intercepto en Y",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "Pregunta": "Una función lineal siempre produce una gráfica que es una línea recta.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "El rango de una función se refiere a todos los posibles valores de salida o 'y'.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "Si f(x) es igual a 'x al cuadrado más 1', ¿cuál es el valor de f(4)?",
        "Respuestas": ["9", "16", "17", "8"],
        "Res_Correcta": "17",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "La gráfica de la función f(x) = 'x al cubo' es simétrica con respecto al origen.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "El dominio de la función f(x) = 'la raíz cuadrada de x' son todos los números reales.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "Una función exponencial de la forma f(x) = 'a elevado a la x', donde a es mayor que 1, es siempre...",
        "Respuestas": ["Creciente", "Decreciente", "Constante", "Negativa"],
        "Res_Correcta": "Creciente",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "La función inversa de la función exponencial es la función...",
        "Respuestas": [],
        "Res_Correcta": "logarítmica",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "Si f(x) = x y g(x) = x+2, la composición 'f de g de x' es igual a...",
        "Respuestas": ["x", "x+2", "2x", "x al cuadrado más 2x"],
        "Res_Correcta": "x+2",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "Una función es par si f(-x) es igual a f(x).",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "La gráfica de una función cuadrática es una...",
        "Respuestas": [],
        "Res_Correcta": "parábola",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "Pregunta": "La suma de los ángulos internos de cualquier triángulo es siempre 180 grados.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "El teorema de Pitágoras se aplica a cualquier tipo de triángulo.",
        "Respuestas": ["Verdadero", "False"],
        "Res_Correcta": "Falso",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "¿A cuántos grados equivale un radián, aproximadamente?",
        "Respuestas": ["90 grados", "180 grados", "360 grados", "57.3 grados"],
        "Res_Correcta": "57.3 grados",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "La función 'tangente' de un ángulo se define como el seno dividido por el...",
        "Respuestas": [],
        "Res_Correcta": "coseno",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "Si el seno de un ángulo es 0.5, ¿cuál es el valor del ángulo en grados?",
        "Respuestas": ["45 grados", "60 grados", "30 grados", "90 grados"],
        "Res_Correcta": "30 grados",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "La identidad trigonométrica fundamental establece que 'seno al cuadrado de x más coseno al cuadrado de x' es igual a...",
        "Respuestas": [],
        "Res_Correcta": "1",
        "Tema": "Trigonometría"
      },
      {
        "Pregunta": "El período de la función seno es '2 por pi'.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La ley de los senos se utiliza para resolver triángulos que no son necesariamente rectángulos.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "El coseno de 90 grados es...",
        "Respuestas": ["1", "0", "0.5", "-1"],
        "Res_Correcta": "0",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La función inversa de la tangente es la...",
        "Respuestas": [],
        "Res_Correcta": "arcotangente",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La ecuación de una línea recta se puede escribir como 'y es igual a mx más b', donde 'm' es la...",
        "Respuestas": ["Ordenada", "Abscisa", "Pendiente", "Distancia"],
        "Res_Correcta": "Pendiente",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "Dos líneas son perpendiculares si el producto de sus pendientes es igual a -1.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La fórmula de la distancia entre dos puntos en un plano se deriva del teorema de Pitágoras.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La ecuación '(x menos h) al cuadrado más (y menos k) al cuadrado es igual a r al cuadrado' representa una...",
        "Respuestas": [],
        "Res_Correcta": "circunferencia",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El punto (0,0) en un plano cartesiano se llama...",
        "Respuestas": ["Centro", "Eje", "Coordenada", "Origen"],
        "Res_Correcta": "Origen",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "Una parábola es el conjunto de todos los puntos que equidistan de un punto fijo (foco) y una línea fija (directriz).",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La pendiente de una línea vertical no está definida.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El punto medio entre (2, 4) y (6, 8) es...",
        "Respuestas": ["(4, 6)", "(3, 5)", "(8, 12)", "(5, 7)"],
        "Res_Correcta": "(4, 6)",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La cónica que tiene dos focos y la suma de las distancias de cualquier punto de la curva a los focos es constante se llama...",
        "Respuestas": [],
        "Res_Correcta": "elipse",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El eje horizontal en un plano cartesiano es el eje...",
        "Respuestas": ["Y", "Z", "X", "W"],
        "Res_Correcta": "X",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El método de sustitución es una técnica válida para resolver sistemas de ecuaciones lineales.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Una matriz cuadrada es aquella que tiene el mismo número de filas que de columnas.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "El determinante de una matriz 2x2, con elementos a, b en la primera fila y c, d en la segunda, se calcula como...",
        "Respuestas": ["a por b menos c por d", "a por d menos b por c", "a por c menos b por d", "a más d menos b más c"],
        "Res_Correcta": "a por d menos b por c",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La matriz identidad es una matriz cuadrada con unos en la diagonal principal y ceros en las demás posiciones.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Para multiplicar dos matrices, el número de columnas de la primera matriz debe ser igual al número de ... de la segunda matriz.",
        "Respuestas": [],
        "Res_Correcta": "filas",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La transpuesta de una matriz se obtiene intercambiando sus filas por sus columnas.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Resolver el sistema 'x más y es igual a 5' y 'x menos y es igual a 1'. El valor de x es...",
        "Respuestas": ["2", "3", "4", "1"],
        "Res_Correcta": "3",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Un sistema de ecuaciones es inconsistente si no tiene...",
        "Respuestas": [],
        "Res_Correcta": "solución",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "El método de Gauss-Jordan se utiliza para resolver sistemas de ecuaciones lineales.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La matriz inversa de una matriz A solo existe si el determinante de A es diferente de...",
        "Respuestas": ["1", "-1", "cero", "infinito"],
        "Res_Correcta": "cero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La propiedad distributiva establece que 'a por (b más c)' es igual a 'a por b más a por c'.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "¿Cuál es el mínimo común múltiplo de 12 y 18?",
        "Respuestas": ["6", "24", "36", "72"],
        "Res_Correcta": "36",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "Todo número primo es impar.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "La expresión 'cero elevado a la potencia de cero' está...",
        "Respuestas": [],
        "Res_Correcta": "indefinida",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "Al resolver 'x al cuadrado es igual a 49', ¿cuáles son las dos soluciones para x?",
        "Respuestas": ["7 y 0", "solo 7", "7 y -7", "49 y -49"],
        "Res_Correcta": "7 y -7",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "Si se multiplica una desigualdad por un número negativo, la dirección del signo de la desigualdad debe invertirse.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "La factorización de 'x al cuadrado más 5x más 6' es...",
        "Respuestas": ["(x+6)(x+1)", "(x+2)(x+3)", "(x-2)(x-3)", "(x+5)(x+1)"],
        "Res_Correcta": "(x+2)(x+3)",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "El valor absoluto de -15 es...",
        "Respuestas": [],
        "Res_Correcta": "15",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "El cuadrante II en un plano cartesiano corresponde a valores de x negativos y valores de y...",
        "Respuestas": ["negativos", "positivos", "cero", "positivos o negativos"],
        "Res_Correcta": "positivos",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "Una ecuación que representa una situación donde 'y' es directamente proporcional a 'x' es 'y es igual a k por x', donde k es la constante de proporcionalidad.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Fundamentos de Álgebra"
      },
      {
        "pregunta": "Para que una gráfica represente una función, no debe fallar la prueba de la línea vertical.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "Una función uno a uno es aquella en la que cada elemento del rango está asociado con exactamente un elemento del dominio.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "Si f(x) = 'la raíz cuadrada de (x menos 2)', ¿cuál es el dominio de la función?",
        "Respuestas": ["x es mayor o igual a 2", "x es mayor que 2", "Todos los números reales", "x es igual a 2"],
        "Res_Correcta": "x es mayor o igual a 2",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "La asíntota vertical de la función f(x) = logaritmo en base 10 de x, se encuentra en x igual a...",
        "Respuestas": [],
        "Res_Correcta": "0",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "La gráfica de f(x) = |x| (valor absoluto de x) tiene forma de...",
        "Respuestas": ["U", "S", "V", "línea recta"],
        "Res_Correcta": "V",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "Si una función es creciente en un intervalo, significa que a medida que x aumenta, f(x) también aumenta.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "El vértice de la parábola f(x) = 'x al cuadrado' se encuentra en el punto...",
        "Respuestas": ["(1,1)", "(0,1)", "(1,0)", "(0,0)"],
        "Res_Correcta": "(0,0)",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "La composición de una función con su inversa siempre da como resultado la función identidad, es decir, x.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "Una función polinómica es continua en todo su dominio.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "El proceso de mover una gráfica hacia arriba, abajo, a la izquierda o a la derecha se llama...",
        "Respuestas": [],
        "Res_Correcta": "traslación",
        "Tema": "Funciones y sus Propiedades"
      },
      {
        "pregunta": "Un ángulo de 360 grados equivale a '2 por pi' radianes.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La cosecante de un ángulo es la inversa multiplicativa de la función...",
        "Respuestas": ["coseno", "secante", "seno", "tangente"],
        "Res_Correcta": "seno",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "El valor de la tangente de 45 grados es...",
        "Respuestas": [],
        "Res_Correcta": "1",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "En el círculo unitario, la coordenada 'x' de un punto corresponde al valor del coseno del ángulo.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La amplitud de la función f(x) = '3 por el seno de x' es...",
        "Respuestas": ["1", "pi", "3", "3x"],
        "Res_Correcta": "3",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "El coseno es una función par.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La ley de los cosenos es una generalización del teorema de...",
        "Respuestas": [],
        "Res_Correcta": "Pitágoras",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "El rango de la función seno es el intervalo de -1 a 1, inclusive.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "Un ángulo coterminal con 30 grados es...",
        "Respuestas": ["-30 grados", "120 grados", "390 grados", "210 grados"],
        "Res_Correcta": "390 grados",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "Resolver ecuaciones trigonométricas a menudo requiere el uso de identidades para simplificar la expresión.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Trigonometría"
      },
      {
        "pregunta": "La ecuación general de una cónica puede representar una parábola, elipse o hipérbola.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "Si la pendiente de una línea es positiva, la línea...",
        "Respuestas": ["es horizontal", "es vertical", "sube de izquierda a derecha", "baja de izquierda a derecha"],
        "Res_Correcta": "sube de izquierda a derecha",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El centro de la circunferencia dada por la ecuación 'x al cuadrado más y al cuadrado es igual a 25' es el punto...",
        "Respuestas": [],
        "Res_Correcta": "(0,0)",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "Dos líneas son paralelas si tienen la misma pendiente.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El radio de la circunferencia 'x al cuadrado más y al cuadrado es igual a 16' es...",
        "Respuestas": ["16", "8", "4", "256"],
        "Res_Correcta": "4",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El eje de simetría de una parábola vertical pasa a través de su...",
        "Respuestas": ["Foco", "Directriz", "Vértice", "Lado recto"],
        "Res_Correcta": "Vértice",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La hipérbola es la única cónica que tiene asíntotas.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El sistema de coordenadas polares utiliza una distancia y un ángulo para localizar un punto.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "El lugar geométrico de los puntos cuya suma de distancias a dos puntos fijos (focos) es constante, se llama...",
        "Respuestas": [],
        "Res_Correcta": "elipse",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "La ecuación 'y es igual a 5' representa una línea...",
        "Respuestas": ["Vertical", "Horizontal", "Inclinada", "Curva"],
        "Res_Correcta": "Horizontal",
        "Tema": "Geometría Analítica"
      },
      {
        "pregunta": "Toda matriz tiene una matriz inversa.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Para resolver un sistema de 3 ecuaciones con 3 incógnitas se puede utilizar la regla de...",
        "Respuestas": ["Sarrus", "Cramer", "Pitágoras", "Ruffini"],
        "Res_Correcta": "Cramer",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "El producto de una matriz por su inversa da como resultado la matriz...",
        "Respuestas": [],
        "Res_Correcta": "identidad",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Un sistema de ecuaciones lineales es 'dependiente' si tiene infinitas soluciones.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La dimensión de una matriz se expresa como 'número de filas por número de columnas'.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "El método de eliminación para resolver sistemas de ecuaciones busca eliminar una de las variables.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Verdadero",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "¿Cuál es el determinante de la matriz identidad de 2x2?",
        "Respuestas": ["0", "2", "1", "-1"],
        "Res_Correcta": "1",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La suma de una matriz y su opuesta da como resultado la matriz...",
        "Respuestas": [],
        "Res_Correcta": "nula",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "Si el determinante de una matriz es cero, el sistema de ecuaciones asociado tiene una única solución.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      },
      {
        "pregunta": "La multiplicación de matrices es conmutativa, es decir, A por B es igual a B por A.",
        "Respuestas": ["Verdadero", "Falso"],
        "Res_Correcta": "Falso",
        "Tema": "Sistemas de Ecuaciones y Matrices"
      }
    ];

    // --- REFERENCIAS A LOS ELEMENTOS DEL DOM ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const studentNameInput = document.getElementById('student-name');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionCounter = document.getElementById('question-counter');
    const questionTopic = document.getElementById('question-topic');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const resultStudentName = document.getElementById('result-student-name');
    const finalScore = document.getElementById('final-score');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const topicsList = document.getElementById('topics-list');

    // --- VARIABLES DE ESTADO ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let userName = '';
    let selectedAnswer = null;

    const NUM_QUESTIONS_TO_SELECT = 15;

    // --- FUNCIONES ---
    function startQuiz() {
        userName = studentNameInput.value.trim();
        if (userName === '') {
            alert('Por favor, ingresa tu nombre para comenzar.');
            return;
        }
        
        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');

        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, NUM_QUESTIONS_TO_SELECT);
        
        currentQuestionIndex = 0;
        userAnswers = [];
        displayQuestion();
    }

    function displayQuestion() {
        selectedAnswer = null;
        let question = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
        questionTopic.textContent = `Tema: ${question.Tema}`;
        questionText.textContent = question.Pregunta;
        answersContainer.innerHTML = '';

        question.Respuestas.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'answer-btn';
            button.addEventListener('click', () => {
                document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                selectedAnswer = answer;
            });
            answersContainer.appendChild(button);
        });

        // Manejo de preguntas de completar
        if (question.Respuestas.length === 0) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Escribe tu respuesta aquí...';
            input.id = 'answer-input-field';
            answersContainer.appendChild(input);
        }
    }

    function goToNextQuestion() {
        const inputField = document.getElementById('answer-input-field');
        if (inputField) {
            selectedAnswer = inputField.value.trim();
        }

        if (selectedAnswer === null || selectedAnswer === '') {
            alert('Por favor, selecciona o escribe una respuesta.');
            return;
        }

        userAnswers.push({
            isCorrect: selectedAnswer.toLowerCase() === currentQuestions[currentQuestionIndex].Res_Correcta.toLowerCase(),
            topic: currentQuestions[currentQuestionIndex].Tema
        });

        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');

        resultStudentName.textContent = `Resultados para: ${userName}`;
        
        let correctCount = userAnswers.filter(ans => ans.isCorrect).length;
        const scorePercentage = Math.round((correctCount / currentQuestions.length) * 100);

        finalScore.textContent = `${scorePercentage}%`;
        correctAnswersSpan.textContent = `${correctCount} de ${currentQuestions.length}`;

        const missedTopics = [...new Set(userAnswers.filter(ans => !ans.isCorrect).map(ans => ans.topic))];
        topicsList.innerHTML = '';
        if (missedTopics.length > 0) {
            missedTopics.forEach(topic => {
                const li = document.createElement('li');
                li.textContent = topic;
                topicsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = '¡Felicidades! No hay temas específicos a mejorar.';
            li.style.backgroundColor = '#d4edda';
            li.style.color = '#155724';
            li.style.borderColor = '#c3e6cb';
            topicsList.appendChild(li);
        }
    }

    function resetExam() {
        studentNameInput.value = '';
        resultsScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    }

    // --- EVENT LISTENERS ---
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', goToNextQuestion);
    restartBtn.addEventListener('click', resetExam);
});