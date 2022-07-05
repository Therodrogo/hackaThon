<template>
    <v-app style="
    background: #ffffff;">
        <v-main>
            <v-container>
                <v-col cols="12">
                    <div class="justify-center text-center mb-12">
                        Admin
                    </div>
                    <div class="justify-center text-center mb-3">
                        <v-btn rounded elevation="2" color="#00CCB1">
                            Crear Evento
                        </v-btn>
                    </div>
                </v-col>
                <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="deep-orange"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Slide X Transition
        </v-btn>
      </template>

      <v-list>

          <v-list-item-title>
            
            <v-col sm="20" >
                    <v-text-field label="ID" prepend-icon="mdi-key"></v-text-field>
                </v-col>
                <v-col sm="20">
                    <v-text-field label="Nombre" prepend-icon="mdi-account-circle"></v-text-field>
                </v-col>
                <v-col sm="20">
                    <v-textarea label="Descripcion" value="" prepend-icon="mdi-comment-text-outline"></v-textarea>
                </v-col>
                <v-col sm="20">
                    <v-text-field label="Lugar" prepend-icon="mdi-map-marker-radius"></v-text-field>
                </v-col>
                <v-col sm="20">
                    <v-text-field label="Fecha de inicio" prepend-icon="mdi-calendar"></v-text-field>
                </v-col>
                <v-col sm="20" >
                    <v-text-field label="Fecha de termino" prepend-icon="mdi-calendar-check"></v-text-field>
                </v-col>
                <v-col sm="20">
                    <v-text-field label="Limite de integrantes" prepend-icon="mdi-account-multiple"></v-text-field>
                </v-col>
                <v-col sm="20" >
                    <v-text-field label="URL banner" prepend-icon="mdi-file-image"></v-text-field>
                </v-col>
                <v-btn rounded elevation="2" color="#00CCB1">
                            Confirmar evento
                        </v-btn>
            
            
            </v-list-item-title>
      
      </v-list>
    </v-menu>
            </v-container>
        </v-main>
    </v-app>
</template>


