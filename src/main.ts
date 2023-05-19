class Mascota:
    def __init__(this, id, name, raza, isAdopted, dueño):
        this.id = id
        this.name = name
        this.raza = raza
        this.isAdopted = isAdopted
        this.dueño = dueño


class ListaMascotas:
    def __init__(this):
        this.mascotas = []

    def agregar_mascota(this, mascota):
        this.mascotas.append(mascota)

    def eliminar_mascota(this, mascota):
        this.mascotas.remove(mascota)

    def listar_mascotas(this):
        for mascota in this.mascotas:
            print(f"ID: {mascota.id}")
            print(f"Nombre: {mascota.name}")
            print(f"Raza/Especie: {mascota.raza}")
            print(f"¿Adoptada?: {'Sí' if mascota.isAdopted else 'No'}")
            print(f"Dueño: {mascota.dueño}")
            print("--------")


# Ejemplo de uso
lista_mascotas = ListaMascotas()

mascota1 = Mascota(1, "Max", "Perro", False, "Juan")
mascota2 = Mascota(2, "Luna", "Gato", True, "María")
mascota3 = Mascota(3, "Rocky", "Perro", False, "Pedro")

lista_mascotas.agregar_mascota(mascota1)
lista_mascotas.agregar_mascota(mascota2)
lista_mascotas.agregar_mascota(mascota3)

lista_mascotas.listar_mascotas()

# Output:
# ID: 1
# Nombre: Max
# Raza/Especie: Perro
# ¿Adoptada?: No
# Dueño: Juan
# --------
# ID: 2
# Nombre: Luna
# Raza/Especie: Gato
# ¿Adoptada?: Sí
# Dueño: María
# --------
# ID: 3
# Nombre: Rocky
# Raza/Especie: Perro
# ¿Adoptada?: No
# Dueño: Pedro
# --------

lista_mascotas.eliminar_mascota(mascota2)

lista_mascotas.listar_mascotas()

# Output:
# ID: 1
# Nombre: Max
# Raza/Especie: Perro
# ¿Adoptada?: No
# Dueño: Juan
# --------
# ID: 3
# Nombre: Rocky
# Raza/Especie: Perro
# ¿Adoptada?: No
# Dueño: Pedro
# --------

