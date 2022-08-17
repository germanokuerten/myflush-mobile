import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from 'yup';

import CategoryPickerItem from "../components/CategoryPickerItem";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import listingsApi from "../api/listings"
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
})

const categories = [
    { 
        label: "Male", 
        value: 1, 
        backgroundColor: 'lightblue', 
        icon: 'human-male' 
    },
    { 
        label: "Female", 
        value: 2, 
        backgroundColor: 'pink', 
        icon: 'human-female' 
    },
    { 
        label: "Unisex", 
        value: 3, 
        backgroundColor: 'violet', 
        icon: 'human-male-female' 
    },
    { 
        label: "Special Needs", 
        value: 4, 
        backgroundColor: 'lightgreen', 
        icon: 'human-wheelchair' 
    },
    { 
        label: "Baby Station", 
        value: 5, 
        backgroundColor: 'tomato', 
        icon: 'human-baby-changing-table' 
    },
    { 
        label: "Other", 
        value: 6, 
        backgroundColor: 'lightgray', 
        icon: 'account-question' 
    },
]

function ListingEditScreen() {

    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing) => {
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );
        setUploadVisible(false);

        if (!result.ok) return alert('Could not save the listing.');
        alert('Your post has been flushed');
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}  
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
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