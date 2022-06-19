<template>
    <v-app id="inspire" class="white">
        <v-content class="white">
            <v-container fluid fill-height class="white">
                <v-layout align-center justify-center class="white">
                    <v-flex xs12 sm8 md4>
                        <v-card color="#575654">
                            <v-toolbar :color="primaryColor">
                                <v-toolbar-title>Login form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field name="login" label="Login" type="text"></v-text-field>
                                    <v-text-field id="password" name="password" label="Password" type="password">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :color="primaryColor" to="/">Crear Usuario</v-btn>
                                <v-btn :color="primaryColor" to="/">Login</v-btn>
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
</style>