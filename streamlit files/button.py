import streamlit as st

def main():
    st.title("Simple Streamlit App")

    # Text input field
    user_input = st.text_input("Enter some text:")

    # Button
    if st.button("Submit"):
        if user_input:
            st.write("You entered:", user_input)
        else:
            st.write("Please enter some text.")

if __name__ == "__main__":
    main()
