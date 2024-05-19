import matplotlib.pyplot as plt
from pywaffle import Waffle

def generate_waffle_chart(attendance_data):
    # Configurar los datos de asistencia de los alumnos
    data = attendance_data

    # Crear el gráfico de waffle
    fig = plt.figure(
        FigureClass=Waffle,
        rows=5,  # Número de filas del gráfico de waffle
        values=data,  # Datos de asistencia de los alumnos
        colors=["#1f77b4", "#ff7f0e", "#2ca02c"],  # Colores para los segmentos
        legend={'loc': 'upper left', 'bbox_to_anchor': (1, 1)},  # Ubicación de la leyenda
        icons=['child', 'child', 'child'],  # Icono para cada segmento (opcional)
        icon_size=18,  # Tamaño del icono (opcional)
        icon_legend=True  # Mostrar leyenda de iconos (opcional)
    )
    
    # Guardar el gráfico como imagen
    fig.savefig('waffle_chart.png', bbox_inches='tight')

# Datos de ejemplo de asistencia de los alumnos
attendance_data = {'Asistieron': 65, 'Ausentes': 25, 'Tardanzas': 10}

# Generar el gráfico de waffle
generate_waffle_chart(attendance_data)
