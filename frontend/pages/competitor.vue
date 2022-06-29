<template>
 <v-container>
    <v-row >
        <v-simple-table
            fixed-header
            height="300px"
        >
        <v-col cols = "6">
            
            <thead>
                <tr>
                <th class="text-left">
                    Mis grupos
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-col>
        <v-col cols = "6">
            <thead>
                <tr>
                <th class="text-left">
                    Informacion
                </th>
                </tr>
            </thead>
        </v-col>
        </v-simple-table>
    </v-row>
 </v-container>
</template>