package org.example;

/**
 * Class Cl1 implements interface If1,
 * consists of field of If1`s type,
 * method that allow to print information about class and method in the console
 * @author Maxim Kradozhon
 */

public class Cl1 implements If1 {
    /**
     * Field of If1`s type
     */
    If1 if1;
    /**
     * Method that prints information about class and method in the console
     */
    public void meth1() {
        System.out.println("Cl1 meth1");
    }
}
