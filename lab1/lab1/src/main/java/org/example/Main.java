package org.example;

import com.google.gson.Gson;

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Maxim", "Kradozhon", "IO-32");
        Gson gson = new Gson();
        String json = gson.toJson(person);
        System.out.println(json);
    }
}

class Person {
    private String name;
    private String lastName;
    private String group;

    public Person(String name, String lastName, String group) {
        this.name = name;
        this.lastName = lastName;
        this.group = group;
    }
}
