<?php 
/**
 * Wysiwyg Block
 */

$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$base_class_name = '--block--image--text --boyic--custom--blocks';
$class_name = $base_class_name;
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

$theme = get_field('theme_theme');
$text = get_field('text');
$header = $text['header'];
$image_position = get_field('image_position');
$image = get_field('image') ? wp_get_attachment_image( get_field('image'), 'large', false,['alt'=>__('Text Image','boyic')] ) :'';





// Build a valid style attribute for background and text colors.
$styles = ''; //array( 'background-color: ' . $background_color, 'color: ' . $text_color );
$style  = ''; //implode( '; ', $styles );

?>
<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?> componentSpacing theme--<?= $theme;?>" <? !empty($style) ? 'style="'.$style.'"':'';?>>
    <div class="content">
        <div class="container <?= $image_position;?>">
            <div class="image">
                <?= $image;?>
            </div>
            <div class="text">
                <?php if($header):?>
                    <h3><?= $header;?>
                    </h3>
                    <?= $text['text'];?>
                <?php endif;?>
            </div>
           
        </div>
    </div>
</div>