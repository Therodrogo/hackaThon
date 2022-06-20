<template>
    <v-app id="inspire" class="white">
        <v-content >
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs18 sm1 md4 >
                        <v-card color="#00CCB1" height="300px" >
                            <v-toolbar color="white">
                                <h1>Iniciar Sesión</h1>
                            </v-toolbar>
                            <v-card-text >
                                <v-form >
                                    <v-text-field name="login" label="Usuario" type="text" color="#3d4545" ></v-text-field>
                                    <v-text-field id="password" name="password" label="Contraseña" type="password" color="#3d4545">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="white" to="/createUser"><v-text class="textBtn">Crear Usuario</v-text></v-btn>
                                <v-btn color="white" to="/"><v-text class="textBtn">Login</v-text></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'Login',
    props: {
        source: String,
    },
    data() {
        return {
            primaryColor: "#00ccb1"
        }
    },
};
</script>

<style>
.textBtn{
    color: #00ccb1;
}
h1{
    color: #00ccb1;
}
</style>