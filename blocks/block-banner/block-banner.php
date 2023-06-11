<?php 
/**
 * Wysiwyg Block
 */

$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$base_class_name = '--block--banner --boyic--custom--blocks';
$class_name = $base_class_name;
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

$theme = get_field('theme_theme');
$background_image = wp_get_attachment_image_src( get_field('background_image'), 'full');
$background_image_mobile = wp_get_attachment_image_src( get_field('background_image_mobile'), 'full');
$text = get_field( 'text' ) ?: 'Content here...';
$video = get_field('video');
$mask = get_field('clip_mask') ? wp_get_attachment_image_src( get_field('clip_mask'), 'full'):false;
$class_name .= get_field('half_height') ? ' --half--height':'';






// Build a valid style attribute for background and text colors.
$styles = ''; //array( 'background-color: ' . $background_color, 'color: ' . $text_color );
$style  = ''; //implode( '; ', $styles );

?>
<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?> theme--<?= $theme;?>" <? !empty($style) ? 'style="'.$style.'"':'';?>

>
    
    <?php if(get_field('clip_mask')):?>
        <!-- @TODO: refactor -->
        <div class="background-image --clip--mask"
            <?= $background_image ?'style="background-image:url('.$background_image[0].')"':'';?>
            <?= $mask ?'data-clip-mask-background="'.$mask[0].'"' :'' ;?> >
            <?php echo wp_get_attachment_image(get_field('background_image'), 'full',false,['alt'=>'Image Banner','class'=>'banner-image invisible'] );?>
        </div>
    <?php else:?>
        <div class="background-image" <?= !empty($background_image_mobile) ?'data-background-mobile="'.$background_image_mobile[0].'"':'';?>>
                <?php echo wp_get_attachment_image(get_field('background_image'), 'full',false,['alt'=>'Image Banner','class'=>'banner-image'] );?>
        </div>
    <?php endif;?>
  
    <div class="content">
        <div class="container">
            <?php if(get_field('header')):?>
                <h1><?= get_field('header');?></h1>
            <?php endif;?>
            <?= $text;?>
        </div>
    </div>

</div>