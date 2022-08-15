import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
})

const categories = [
    { label: "Male", value: 1, backgroundColor: 'lightblue', icon: 'human-male' },
    { label: "Female", value: 2, backgroundColor: 'pink', icon: 'human-female' },
    { label: "Unisex", value: 3, backgroundColor: 'violet', icon: 'human-male-female' },
    { label: "Special Needs", value: 4, backgroundColor: 'lightgreen', icon: 'human-wheelchair' },
    { label: "Baby Station", value: 5, backgroundColor: 'tomato', icon: 'human-baby-changing-table' },
    { label: "Other", value: 6, backgroundColor: 'lightgray', icon: 'account-question' },
]

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}  
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default ListingEditScreen;