package org.ecommerce.services;

import org.apache.coyote.BadRequestException;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.models.dto.CartItemsDTO;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.models.producto.entity.Producto;
import org.ecommerce.repositories.CartItemsRepository;
import org.ecommerce.repositories.CartRepository;
import org.ecommerce.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class CartItemsService {

    @Autowired private CartItemsRepository cartItemsRepository;
    @Autowired private CartRepository cartRepository;
    @Autowired private ProductoRepository productoRepository;

    public List<CartItems> getAllCartItemsService(String userName){
        return this.cartItemsRepository.findByUserName(userName);
    }
    public List<CartItems> getCartByUser(String email){
        return this.cartItemsRepository.findByClientAndEmail(email);
    }
    public void cleanCart(Long id){
        this.cartItemsRepository.deleteByUserId(id);
    }
    public int getCountByUser(Long id){
        List<Producto> cartItems = this.cartItemsRepository.findProductoById(id);
        return cartItems.size();
    }
    public void addCartItem(Long cartId, CartItemsDTO cartItemsDTO){
        Optional<Cart> optionalCart = cartRepository.findById(cartId);

        Cart getOptionalCart = optionalCart.get();

        Producto producto = new Producto();
        Optional<Producto> optionalProducto = productoRepository.findById(producto.getProductId());

        Producto getOptionalProducto = optionalProducto.get();

        CartItems cartItems = new CartItems(
                cartItemsDTO.getDiscount(),
                cartItemsDTO.getProduct_price(),
                cartItemsDTO.getQuantity(),
                getOptionalCart,
                (Set<Producto>) getOptionalProducto
        );

        getOptionalCart.getCartItemsSet().add(cartItems);

        cartRepository.save(getOptionalCart);
    }
    public void removeCartItem(Long cartId, Long cartItemsId){
        Optional<Cart> optionalCart = cartRepository.findById(cartId);
        Cart cart = optionalCart.get();

        Optional<CartItems> OptionalCartItems = cartItemsRepository.findById(cartItemsId);

        CartItems cartItems = OptionalCartItems.get();

        cart.getCartItemsSet().remove(cartItems);

        cartRepository.save(cart);
    }
}
