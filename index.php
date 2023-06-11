<?php 
/*
Plugin Name: Boyic Blocks
Plugin URI: https://www.linkedin.com/in/boyic/
Description: This is a custom collection blocks based on Advance Custom Fields
Version: 1
Author: Chris Alberto
Author URI: https://www.linkedin.com/in/boyic/
License: GNU
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: boyic
*/


if (!defined('BOYIC_PATH')) define('BOYIC_PATH', plugin_dir_path( __FILE__ ) );

if(!class_exists('ACF')):
    function general_admin_notice(){
        printf("<div class='notice notice-error is-dismissible'><strong>%s</strong></div>",__('For Boyic Blocks to work.<br> ACF Pro 6+ is required!','boyic'));
    }
    add_action('admin_notices', 'general_admin_notice');
    return;
endif;

add_action( 'enqueue_block_editor_assets', function(){
	wp_enqueue_script('main-block-js');
    wp_enqueue_style( 'main-block-style');
});

add_action('wp_enqueue_scripts', function() {
    wp_register_style( 'main-block-style', plugin_dir_url( __FILE__ ) . './dist/assets/css/main.css',[], null, 'all');
    wp_enqueue_style( 'main-block-style');
    wp_register_script( 'main-block-js', plugin_dir_url(__FILE__).'dist/assets/js/main.js',[],null,true );
    wp_enqueue_script('main-block-js');
});

add_action('admin_enqueue_scripts', function() {
    wp_register_style( 'main-block-style', plugin_dir_url( __FILE__ ) . './dist/assets/css/main.css',[], null, 'all');
    wp_enqueue_style( 'main-block-style');
    wp_register_script( 'main-block-js', plugin_dir_url(__FILE__).'dist/assets/js/main.js',[],null,true );
    wp_enqueue_script('main-block-js');
});

add_action( 'plugins_loaded', function() {
    foreach(glob( BOYIC_PATH . 'blocks/**/*.json') as $block){ 
         register_block_type($block);
    }
    // var_dump(plugin_dir_url(__FILE__).'dist/main.js');
});
// add_theme_support( 'disable-layout-styles' );
    

// ACF Save point.
add_filter( 'acf/settings/save_json', function($path) {
    
    $path = BOYIC_PATH . 'acf-json';
	return $path;
} );


// Load point.
add_filter( 'acf/settings/load_json', function($paths) {
    unset( $paths );

	$paths[] = BOYIC_PATH . 'acf-json';

	return $paths;
} );

acf_add_options_page(array(
    'page_title'    => 'Boyic Blocks',
    'menu_title'    => 'Global Options',
    'menu_slug'     => 'boyic-blocks-global-options',
    'capability'    => 'edit_posts',
    'redirect'      => false
));

